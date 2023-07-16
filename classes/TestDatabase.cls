public class TestDatabase {

    public static void createAccount(){
        try{
            Account acc = new Account(Name='Test');
        insert acc;
        Contact con = new Contact();
        insert con;
        }
        Catch(Exception e){
            system.debug('error' + e.getCause());
        }
        
    }
}