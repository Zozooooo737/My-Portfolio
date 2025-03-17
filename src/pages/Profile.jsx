import React from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import Timeline from "@/components/profile/Timeline";
import DiscoverCards from "@/components/profile/DiscoverCards";
import CVViewer from "@/components/profile/CVViewer";

const Profile = () => {
  return (
    <div className="space-y- mt-10 w-full items-center justify-center p-5">
      <ProfileHeader />
      <Timeline />
      <DiscoverCards />
      <CVViewer />
    </div>
  );
};

export default Profile;
