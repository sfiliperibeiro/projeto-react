import React, { useState, createContext, useContext, useEffect, ReactNode } from "react";

interface LikesContextProps {
  likes: number;
  handleLike: () => void;
}

const LikesContext = createContext<LikesContextProps>({
  likes: 0,
  handleLike: () => {},
});


interface Props {
  children: ReactNode;
}


const LikesProvider:React.FC<Props> = ({ children }) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = window.localStorage.getItem("likes");
    return storedLikes ? parseInt(storedLikes) : 0;
  });

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  useEffect(() => {
    window.localStorage.setItem("likes", likes.toString());
  }, [likes]);

  return (
    <LikesContext.Provider value={{ likes, handleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

const LikeButton: React.FC = () => {
  const { likes, handleLike } = useContext(LikesContext);

  return (
    <button onClick={handleLike}>
      {" "}
      &#128150; {likes} {likes === 1 ? "like" : "likes"}
    </button>
  );
};

const Likes: React.FC = () => {
  return (
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  );
};

export default Likes;
