const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

type Comment = {
  postId?: number;
  id: number;
  name?: string;
  email: string;
  body?: string;
};

const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData(COMMENTS_URL).then((data: Comment[]) => {
  for (const comment of data) {
    console.log(`ID: ${comment.id}, Email: ${comment.email}`);
  }
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
