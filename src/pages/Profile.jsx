import React from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Timeline from "@/components/profile/Timeline";
import DiscoverCards from "@/components/profile/DiscoverCards";
import CVViewer from "@/components/profile/CVViewer";

const Profile = () => {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-3 px-4 py-8 sm:space-y-4 sm:px-6 sm:py-10 md:space-y-0 lg:px-8 lg:py-12">
      <ProfileHeader />
      <Timeline />
      <DiscoverCards />
      <CVViewer />
    </div>
  );
};

export default Profile;
