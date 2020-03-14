package InstagramAPI;

public class InstaTesting {
    public static void main(String[] args) {
        Instagram instagram = new Instagram();

        //Sign up page
        //on sign up page Users Must provide name, age, username

        InstagramUser user1 = new InstagramUser("John Wick", 45, "jw2020");

        instagram.addUser(user1);
       // instagram.seeAllUsers("Cyb32134");


        InstagramUser user2 = new InstagramUser("Mariya", 88, "jm3434");
        instagram.addUser(user2);
        instagram.seeAllUsers("Cyb32134");
    }


}
