import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightspage = async () => {

  const {isOnboarded} = await getUserOnboardingStatus();

   if (!isOnboarded) {
    redirect("/onboarding");
  }

  return (
    <div>IndustryInsightspage</div>
  )
}

export default IndustryInsightspage