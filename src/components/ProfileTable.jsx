/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
// component
import LikeAndBookmarkButton from './LikeAndBookmarkButton';
// css
import { Flex } from '../styles/baseStyles';

function ProfileTable() {
  const { likes, bookmarks } = useSelector((state) => state);

  const allData = likes.concat(bookmarks);
  const filterData = [...new Set(allData.map(JSON.stringify))].map(JSON.parse);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Genres</th>
          <th>Like/SeenList</th>
        </tr>
      </thead>
      <tbody>
        {
          filterData?.map((item, index) => (
            <tr key={index}>
              <td>
                {item.id}
              </td>
              <td>
                {item.title}
              </td>
              <td>
                {item?.genre?.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                    ,
                    {' '}
                  </span>
                ))}
              </td>
              <td>
                <Flex>
                  <LikeAndBookmarkButton
                    id={item.id}
                    title={item.title}
                    noPicture={item.img}
                    releaseDate={item.releaseDate}
                    genres={item.genre}
                  />
                </Flex>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default ProfileTable;
