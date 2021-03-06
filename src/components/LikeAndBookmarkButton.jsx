/* eslint-disable react/prop-types */
import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// icons
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { BsBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs';

import { addLike, removeLike } from '../store/likes';
import { addBookmark, removeBookmark } from '../store/bookmarks';

function LikeAndBookmarkButton({
  id, title, noPicture, releaseDate, genres,
}) {
  const { likes, bookmarks, isLogin } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isLike = likes?.some((item) => item.id === id);
  const isBookmark = bookmarks?.some((item) => item.id === id);

  if (!isLogin) {
    return false;
  }

  return (
    <>
      <div>
        {
          isLike
            ? (
              <IoIosHeart
                size={30}
                color="red"
                onClick={() => dispatch(removeLike(id))}
              />
            )
            : (
              <IoIosHeartEmpty
                size={30}
                color="red"
                onClick={() => dispatch(addLike(
                  id,
                  title,
                  noPicture,
                  releaseDate,
                  genres,
                ))}
              />
            )
        }
      </div>
      <div>
        {
          isBookmark
            ? (
              <BsBookmarkCheckFill
                size={25}
                color="#141E61"
                onClick={() => dispatch(removeBookmark(id))}
              />
            )
            : (
              <BsBookmarkCheck
                size={25}
                color="#141E61"
                onClick={() => dispatch(addBookmark(
                  id,
                  title,
                  noPicture,
                  releaseDate,
                  genres,
                ))}
              />
            )
        }
      </div>
    </>
  );
}

export default LikeAndBookmarkButton;
