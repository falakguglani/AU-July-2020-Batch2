public class App
{
    public static void main(String[] args)
    {
        ArpOps o=new ArpOps();
        o.setA(10);
        o.setB(5);
        System.out.println("Add"+o.add());
        System.out.println("Subtract"+o.subtract());
        System.out.println("Divide"+o.divide());
        System.out.println("Multiply"+o.multiply());
        System.out.println("Modulo"+o.modulus());
    }
}

