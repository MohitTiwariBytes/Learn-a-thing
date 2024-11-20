import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./Components/Auth/AuthPage";
import HomePage from "./Components/Home/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Message from "./Pages/Message";
import Books from "./Pages/Books";
import Community from "./Pages/Community";
import Courses from "./Pages/Courses";
import Nts from "./Components/Home/Nts";
import PomodoroTimer from "./Pages/Pomodoro";
import ToDoPage from "./Pages/ToDoList";
import QuizPage from "./Pages/QuizPage";
import TipsPage from "./Pages/TipsAndTricksPage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/Settings";
import ChatBot from "./Pages/ChatBot";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div className="flex">
              <Sidebar className="fixed top-0 left-0 h-full w-64" />
              <HomePage />
            </div>
          </>
        }
      >
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Nts />} />
        <Route path="messages" element={<Message />} />
        <Route path="books" element={<Books />} />
        <Route path="community" element={<Community />} />
        <Route path="courses" element={<Courses />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="quizzes" element={<QuizPage />} />
        <Route path="pomodoro" element={<PomodoroTimer />} />
        <Route path="tips" element={<TipsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="ai" element={<ChatBot />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRouter;
