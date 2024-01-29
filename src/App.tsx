import { FormEvent, useState } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery } from "./redux/api";

function App() {
  const { data, error, isLoading, isSuccess, isError } = useGetPostsQuery("");
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  console.log(data, error, isLoading, isSuccess, isError);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>My App</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((i) => (
          <PostsCard key={i.id} id={i.id} title={i.title} views={i.views} />
        ))
      )}
    </div>
  );
}

export default App;
