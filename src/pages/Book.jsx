
import { getAllBooks , reset } from "../../features/books/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import BookComponent from "./BookComponent";


export default function Book() {


    const dispatch = useDispatch();
    const { books, isError, message, isSuccess, isLoading } = useSelector(
      (state) => state.book
    );
    useEffect(() => {
      dispatch(getAllBooks());
      return () => {
        reset();
      };
    }, []);
  
  return (
    <div>{books.map((book) => <BookComponent event={book} key={book._id} />)}</div>
  )
}
