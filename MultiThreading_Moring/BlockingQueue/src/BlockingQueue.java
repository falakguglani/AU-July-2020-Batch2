import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

//I went through read-write lock but did not understand the need to implement it here as we are not doing any only read
//operation at all so.I implemented this using Object lock.

public class BlockingQueue {

    public static void main(String[] args) {
        System.out.println("Size of Queue");
        Scanner input=new Scanner(System.in);
        Worker wt=new Worker(input.nextInt());
        System.out.println("No. of Enqueue Threads");
        int en=input.nextInt();
        ExecutorService esPut= Executors.newFixedThreadPool(en);
        System.out.println("Size of Dequeue Threads");
        int de=input.nextInt();
        ExecutorService esTake= Executors.newFixedThreadPool(de);
        for(int i=0;i<en;i++)
        esPut.execute(()-> wt.take());
        for(int i=0;i<de+1;i++)
        esTake.execute(() -> wt.put());
        esPut.shutdown();
        esTake.shutdown();

    }

}

class Worker{

    private int maxSize;
    private int minSize;
    private List<Integer> list=new ArrayList<>();
    private Object lock=new Object();
    private int number=0;

    public Worker(int maxSize) {
        this.maxSize = maxSize;
    }

    public void put(){
        synchronized (lock){
            while(true){
                if(list.size()==maxSize){
                    System.out.println("Queue is full.Cannot add more elements.Please dequeue");
                    try {
                        lock.wait();
                    }
                    catch (Exception e){
                        System.out.println(e.getMessage());
                    }
                }
                else{
                    System.out.println("Adding no."+number+"to the queue");
                    list.add(number);
                    number++;
                    lock.notify();
                }
                try {
                    Thread.sleep(200);
                } catch(Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        }
    }

    public void take(){
        synchronized (lock){
            while (true){
                if(list.size()==minSize){
                    System.out.println("Please add to the queue before dequeing it");
                              try{
                        lock.wait();
                        }
                        catch (Exception e)
                        {
                            System.out.println(e.getMessage());
                        }
                }
                else{
                    number--;
                    System.out.println("Removing message "+number+" from the queue.");
                    list.remove(number);
                    lock.notify();
                }
                try {
                    Thread.sleep(200);
                } catch(Exception e) {
                    System.out.println(e.getMessage());
                }

            }
        }
    }
}
