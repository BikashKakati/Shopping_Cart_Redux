import { useState, useEffect } from "react";

export const useFetch = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    let subscribe = true;
    setLoading(true);
    fetchApi(url).then(cardData => {
      if (subscribe) {
        setData(cardData);
        setLoading(false);
      }
    }).catch(err => setLoading(false));
    return () => { subscribe = false }
  }, [])


  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }
  return (
    {
      loading,
      data,
    }
  )
}