"use client";

import { FC, useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Types
interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  totalRoutines: number;
  completedRoutines: number;
  currentStreak: number;
  longestStreak: number;
}

// Styled Components
const ProfileContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background-color: #f9fafb;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0070f3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const JoinDate = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const SettingsSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
`;

const SettingsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`;

const SettingLabel = styled.div`
  font-weight: 500;
  color: #374151;
`;

const SettingValue = styled.div`
  color: #6b7280;
`;

const EditButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0051a8;
  }
`;

const ProfilePage: FC = () => {
  // Mock data - replace with actual data fetching
  const [profile] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "March 2024",
    totalRoutines: 5,
    completedRoutines: 42,
    currentStreak: 7,
    longestStreak: 14,
  });

  const handleEditProfile = () => {
    // TODO: Implement edit profile functionality
    console.log("Edit profile clicked");
  };

  return (
    <>
      <Header />
      <ProfileContainer>
        <ContentWrapper>
          <ProfileHeader>
            <Avatar>{profile.name.charAt(0)}</Avatar>
            <ProfileInfo>
              <Name>{profile.name}</Name>
              <Email>{profile.email}</Email>
              <JoinDate>Member since {profile.joinDate}</JoinDate>
            </ProfileInfo>
            <EditButton onClick={handleEditProfile}>Edit Profile</EditButton>
          </ProfileHeader>

          <StatsGrid>
            <StatCard>
              <StatValue>{profile.totalRoutines}</StatValue>
              <StatLabel>Active Routines</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{profile.completedRoutines}</StatValue>
              <StatLabel>Completed Routines</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{profile.currentStreak}</StatValue>
              <StatLabel>Current Streak</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{profile.longestStreak}</StatValue>
              <StatLabel>Longest Streak</StatLabel>
            </StatCard>
          </StatsGrid>

          <SettingsSection>
            <SectionTitle>Account Settings</SectionTitle>
            <SettingsGrid>
              <SettingItem>
                <SettingLabel>Email Notifications</SettingLabel>
                <SettingValue>Enabled</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Dark Mode</SettingLabel>
                <SettingValue>Disabled</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Language</SettingLabel>
                <SettingValue>English</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Time Zone</SettingLabel>
                <SettingValue>UTC-5 (Eastern Time)</SettingValue>
              </SettingItem>
            </SettingsGrid>
          </SettingsSection>
        </ContentWrapper>
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default ProfilePage;
