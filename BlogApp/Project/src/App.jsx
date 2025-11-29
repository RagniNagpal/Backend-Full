import Signup from "./Signup";
import Login from "./Login";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleBlogsUpdated = () => {
    setRefresh(!refresh); // Toggle to trigger re-render / refresh
  };

  return (
    <>
      <Signup />
      <Login />
      <BlogForm onBlogsUpdated={handleBlogsUpdated} />
      <BlogList key={refresh} /> {/* Key changes to re-render list */}
    </>
  );
}

export default App;
