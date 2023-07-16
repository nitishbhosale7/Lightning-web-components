public class getAccounts {
	 @AuraEnabled(cacheable=true)
    public static List<Account> getacclist(){
        return [Select id , Name , industry , Phone from account ];
    }
}