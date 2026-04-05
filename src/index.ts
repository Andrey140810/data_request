const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const getData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

getData<Comment[]>(COMMENTS_URL).then((data) => {
  data.forEach(({ id, email }) => {
    console.log(`ID: ${id}, Email: ${email}`);
  });
});
