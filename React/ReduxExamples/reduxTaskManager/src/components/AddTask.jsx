import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTaskCompletion } from "../features/Task/TaskSlice";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.items);

  function sendTask() {
    if (task.trim() === "") return;
    dispatch(addTask({ id: Date.now(), text: task, completed: false }));
    setTask("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          📝 Task Manager
        </h1>

        {/* Input & Add Button */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={sendTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition"
          >
            <PlusCircle className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center italic">No tasks yet...</p>
          ) : (
            tasks.map((t) => (
              <li
                key={t.id}
                className={`flex justify-between items-center px-4 py-2 rounded-lg shadow-sm ${
                  t.completed ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <span
                  className={`text-gray-800 cursor-pointer ${
                    t.completed ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => dispatch(toggleTaskCompletion(t.id))}
                >
                  {t.text}
                </span>
                <div className="flex gap-2">
                    <button
                  onClick={() => dispatch(removeTask(t.id))}
                  className="text-red-500 hover:text-red-700 transition"
                >
                    ❌
                </button>
                <button
                  onClick={() => dispatch(toggleTaskCompletion(t.id))}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  {t.completed ? "↩️" : "✅"}
                </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
