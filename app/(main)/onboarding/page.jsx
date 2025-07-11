import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/app/data/industries";
import OnboardingForm from "./_components/onboarding-form";


const OnboardingPage = async() => {

  const {isOnboarded} = await getUserOnboardingStatus();

   if (isOnboarded) {
    redirect("/dashboard");
  }
  
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};
export default OnboardingPage;