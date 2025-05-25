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
  frequency: string;
  lastCompleted?: string;
  streak: number;
}

// Styled Components
const RoutinesContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background-color: #f9fafb;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
`;

const CreateButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #0051a8;
  }
`;

const RoutinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const RoutineCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const RoutineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const RoutineDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const RoutineMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const Frequency = styled.span`
  font-size: 0.875rem;
  color: #4b5563;
  background-color: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
`;

const Streak = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #059669;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const EmptyStateTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const EmptyStateDescription = styled.p`
  color: #6b7280;
  margin-bottom: 2rem;
`;

const RoutinesPage: FC = () => {
  // Mock data - replace with actual data fetching
  const [routines] = useState<Routine[]>([
    {
      id: "1",
      title: "Morning Meditation",
      description: "Start the day with 10 minutes of mindfulness meditation",
      frequency: "Daily",
      lastCompleted: "2024-03-20",
      streak: 7,
    },
    {
      id: "2",
      title: "Evening Workout",
      description: "30-minute HIIT workout to stay fit and healthy",
      frequency: "Mon, Wed, Fri",
      lastCompleted: "2024-03-19",
      streak: 12,
    },
    {
      id: "3",
      title: "Reading Time",
      description: "Read at least 30 pages of a book",
      frequency: "Daily",
      lastCompleted: "2024-03-20",
      streak: 5,
    },
  ]);

  const handleCreateRoutine = () => {
    // TODO: Implement create routine functionality
    console.log("Create routine clicked");
  };

  return (
    <>
      <Header />
      <RoutinesContainer>
        <ContentWrapper>
          <HeaderSection>
            <Title>My Routines</Title>
            <CreateButton onClick={handleCreateRoutine}>
              <span>+</span> Create Routine
            </CreateButton>
          </HeaderSection>

          {routines.length > 0 ? (
            <RoutinesGrid>
              {routines.map((routine) => (
                <RoutineCard key={routine.id}>
                  <RoutineTitle>{routine.title}</RoutineTitle>
                  <RoutineDescription>{routine.description}</RoutineDescription>
                  <RoutineMeta>
                    <Frequency>{routine.frequency}</Frequency>
                    <Streak>
                      <span>🔥</span>
                      {routine.streak} day streak
                    </Streak>
                  </RoutineMeta>
                </RoutineCard>
              ))}
            </RoutinesGrid>
          ) : (
            <EmptyState>
              <EmptyStateTitle>No routines yet</EmptyStateTitle>
              <EmptyStateDescription>
                Start building your daily routines to improve your productivity
                and well-being.
              </EmptyStateDescription>
              <CreateButton onClick={handleCreateRoutine}>
                <span>+</span> Create Your First Routine
              </CreateButton>
            </EmptyState>
          )}
        </ContentWrapper>
      </RoutinesContainer>
      <Footer />
    </>
  );
};

export default RoutinesPage;
