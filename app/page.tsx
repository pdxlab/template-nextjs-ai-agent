"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex flex-col items-center min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Agent</h1>

      <div className="flex flex-col gap-4 w-full mb-6 flex-1">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-lg ${
              m.role === "user"
                ? "bg-blue-100 self-end"
                : "bg-gray-100 self-start"
            }`}
          >
            <span className="font-semibold capitalize">{m.role}: </span>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          className="flex-1 border rounded-lg p-2"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </main>
  );
}
