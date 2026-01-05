import java.io.IOException;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
public class VTSCouresesTest {
	static WebDriver driver = new ChromeDriver();
	static WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
	public static void main(String[] args) {
		//signup();
		signin();
		enrollCourse();
	}
	
	public static void signup() {
		try {
			driver.get("https://codeacademyvts.netlify.app/signup");
			wait.until(ExpectedConditions.urlContains("/signup"));
			
			WebElement full_name = driver.findElement(By.name("name"));
			full_name.sendKeys("Lajos Gregus");
			
			WebElement email = driver.findElement(By.name("email"));
			email.sendKeys("grgslali@gmail.com");
			
			WebElement password = driver.findElement(By.name("password"));
			password.sendKeys("FlekiAti123");
			
			WebElement confirmPassword = driver.findElement(By.name("confirmPassword"));
			confirmPassword.sendKeys("FlekiAti123");
			
			driver.findElement(By.name("create-account")).click();
			
		    wait.until(ExpectedConditions.urlContains("/dashboard"));

		    System.out.println("✅ Sign up uspešan – korisnik prebačen na dashboard");
			
		} catch (Exception e) {
		    System.out.println("❌ Signup nije uspešan");
		    e.printStackTrace();
		}
	}
	
	public static void signin() {
		try {
			driver.get("https://codeacademyvts.netlify.app/login");
			
			wait.until(ExpectedConditions.urlContains("/login"));
			
			WebElement email = driver.findElement(By.name("email"));
			email.sendKeys("grgslali@gmail.com");
			
			WebElement password = driver.findElement(By.name("password"));
			password.sendKeys("FlekiAti123");
			
			driver.findElement(By.name("sign-in")).click();
			
			wait.until(ExpectedConditions.urlContains("/dashboard"));
			
			System.out.println("✅ Sign in uspešan – korisnik prebačen na dashboard");
			
		}catch (Exception e) {
		    System.out.println("❌ Sign in nije uspešan");
		    e.printStackTrace();
		}
	}
	
	public static void enrollCourse() {
		try {
			driver.get("https://codeacademyvts.netlify.app/login");
			
			wait.until(ExpectedConditions.urlContains("/login"));
			
			WebElement email = driver.findElement(By.name("email"));
			email.sendKeys("grgslali@gmail.com");
			
			WebElement password = driver.findElement(By.name("password"));
			password.sendKeys("FlekiAti123");
			
			driver.findElement(By.name("sign-in")).click();
			
			wait.until(ExpectedConditions.urlContains("/dashboard"));
			
			driver.get("https://codeacademyvts.netlify.app/#courses");
			
			wait.until(ExpectedConditions.urlContains("/#courses"));
			
			WebElement course = driver.findElement(By.cssSelector("a[href='/course/python/enroll']"));
			course.click();
			
			System.out.println("✅ upis kursa – korisnik prebačen na dashboard");
			
		}catch (Exception e) {
		    System.out.println("❌ upis kursa nije uspešan");
		    e.printStackTrace();
		}
	}


}
