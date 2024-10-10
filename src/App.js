import "./App.css";
import { useState } from "react";
import { initialData } from "./data";
import NestedComments from "./NestedComments";

function App() {
  const [data, setData] = useState(initialData);
  const handleDelete = (id) => {
    const deleteData = (data) => {
      return data
        ?.filter((item) => item.id !== id)
        .map((item) => {
          return { ...item, children: deleteData(item.children) };
        });
    };

    setData(deleteData(data));
  };

  const handleEdit = (id, newText) => {
    console.log(id, newText);
    const editComment = (items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        } else if (item?.children) {
          return { ...item, children: editComment(item.children) };
        }
        return item;
      });
    };
    setData(editComment(data));
  };

  const handleAdd = (id, newComment) => {
    const addComment = (data) => {
      return data.map((item) => {
        if (item.id === id) {
          const newReply = {
            id: Math.random() * 10,
            text: newComment,
            depth: item.depth + 1,
            children: [],
          };
          return { ...item, children: [...item.children, newReply] };
        } else if (item.children) {
          return { ...item, children: addComment(item.children) };
        }

        return item;
      });
    };

    setData(addComment(data));
  };
  return (
    <div>
      <h1>Nested Comments</h1>
      {data.map((item) => {
        return (
          <NestedComments
            comments={item}
            onDelete={handleDelete}
            key={item.id}
            onEdit={handleEdit}
            onAdd={handleAdd}
          />
        );
      })}
    </div>
  );
}

export default App;
