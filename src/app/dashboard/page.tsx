"use client";

import { FC, useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Types
interface Routine {
  id: string;
  title: string;
  description: string;
  time: string;
  completed: boolean;
  streak: number;
}

interface DailyProgress {
  date: string;
  completed: number;
  total: number;
}

// Styled Components
const DashboardContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background-color: #f9fafb;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeSection = styled.div`
  margin-bottom: 2rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const WelcomeSubtitle = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const ViewAllButton = styled.button`
  color: #0070f3;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const RoutineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RoutineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

const RoutineInfo = styled.div`
  flex: 1;
`;

const RoutineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const RoutineTime = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const CompleteButton = styled.button<{ completed: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.completed ? "#059669" : "#f3f4f6")};
  color: ${(props) => (props.completed ? "white" : "#374151")};
  border: none;

  &:hover {
    background-color: ${(props) => (props.completed ? "#047857" : "#e5e7eb")};
  }
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem 0;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  height: 100%;
  background-color: #0070f3;
  width: ${(props) => props.percentage}%;
  transition: width 0.3s ease;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const DashboardPage: FC = () => {
  // Mock data - replace with actual data fetching
  const [routines] = useState<Routine[]>([
    {
      id: "1",
      title: "Morning Meditation",
      description: "10 minutes of mindfulness",
      time: "7:00 AM",
      completed: true,
      streak: 7,
    },
    {
      id: "2",
      title: "Morning Workout",
      description: "30-minute HIIT session",
      time: "8:00 AM",
      completed: false,
      streak: 5,
    },
    {
      id: "3",
      title: "Reading Time",
      description: "Read 30 pages",
      time: "9:00 PM",
      completed: false,
      streak: 3,
    },
  ]);

  const [dailyProgress] = useState<DailyProgress>({
    date: "Today",
    completed: 1,
    total: 3,
  });

  const handleCompleteRoutine = (id: string) => {
    // TODO: Implement routine completion
    console.log("Complete routine:", id);
  };

  const progressPercentage =
    (dailyProgress.completed / dailyProgress.total) * 100;

  return (
    <>
      <Header />
      <DashboardContainer>
        <ContentWrapper>
          <WelcomeSection>
            <WelcomeTitle>Welcome back, John!</WelcomeTitle>
            <WelcomeSubtitle>
              Here&apos;s your routine overview for today
            </WelcomeSubtitle>
          </WelcomeSection>

          <DashboardGrid>
            <MainContent>
              <Card>
                <CardHeader>
                  <CardTitle>Today&apos;s Routines</CardTitle>
                  <ViewAllButton>View All</ViewAllButton>
                </CardHeader>
                <RoutineList>
                  {routines.map((routine) => (
                    <RoutineItem key={routine.id}>
                      <RoutineInfo>
                        <RoutineTitle>{routine.title}</RoutineTitle>
                        <RoutineTime>{routine.time}</RoutineTime>
                      </RoutineInfo>
                      <CompleteButton
                        completed={routine.completed}
                        onClick={() => handleCompleteRoutine(routine.id)}
                      >
                        {routine.completed ? "Completed" : "Mark Complete"}
                      </CompleteButton>
                    </RoutineItem>
                  ))}
                </RoutineList>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Progress</CardTitle>
                </CardHeader>
                <ProgressBar>
                  <ProgressFill percentage={progressPercentage} />
                </ProgressBar>
                <StatsGrid>
                  <StatItem>
                    <StatValue>{dailyProgress.completed}</StatValue>
                    <StatLabel>Completed</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>
                      {dailyProgress.total - dailyProgress.completed}
                    </StatValue>
                    <StatLabel>Remaining</StatLabel>
                  </StatItem>
                </StatsGrid>
              </Card>
            </MainContent>

            <Sidebar>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <StatsGrid>
                  <StatItem>
                    <StatValue>7</StatValue>
                    <StatLabel>Day Streak</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>42</StatValue>
                    <StatLabel>Total Completed</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>5</StatValue>
                    <StatLabel>Active Routines</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>14</StatValue>
                    <StatLabel>Best Streak</StatLabel>
                  </StatItem>
                </StatsGrid>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming</CardTitle>
                </CardHeader>
                <RoutineList>
                  {routines
                    .filter((routine) => !routine.completed)
                    .map((routine) => (
                      <RoutineItem key={routine.id}>
                        <RoutineInfo>
                          <RoutineTitle>{routine.title}</RoutineTitle>
                          <RoutineTime>{routine.time}</RoutineTime>
                        </RoutineInfo>
                      </RoutineItem>
                    ))}
                </RoutineList>
              </Card>
            </Sidebar>
          </DashboardGrid>
        </ContentWrapper>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default DashboardPage;
