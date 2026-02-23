export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-8">ThreadInbox</h2>
        <nav className="space-y-4">
          <p className="hover:text-gray-300 cursor-pointer">Inbox</p>
          <p className="hover:text-gray-300 cursor-pointer">Messages</p>
          <p className="hover:text-gray-300 cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          Welcome to your unified inbox.
        </div>
      </main>
    </div>
  )
}