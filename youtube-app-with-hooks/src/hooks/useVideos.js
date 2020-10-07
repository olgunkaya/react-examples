import { useState, useEffect } from "react";
import youtube from "../api/Youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    //we have just deconstructed the items out of response.
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(items);
  };

  return [videos, search];
};

export default useVideos;
