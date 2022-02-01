/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// component
import LikeAndBookmarkButton from './LikeAndBookmarkButton';
// css
import { Flex, CenterText } from '../styles/baseStyles';
import { FilterContent, TableContent } from '../styles/Profile.styled';

function ProfileTable() {
  const { likes, bookmarks } = useSelector((state) => state);
  const [select, setSelect] = useState();

  const allData = likes.concat(bookmarks);
  const filterData = [...new Set(allData.map(JSON.stringify))].map(JSON.parse);

  const [data, setData] = useState(filterData);

  useEffect(() => {
    if (select === 'date') {
      const sortDate = filterData
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      setData(sortDate);
    } else if (select === 'like') {
      setData(likes);
    } else if (select === 'bookmark') {
      setData(bookmarks);
    } else if (select === 'filter') {
      setData(filterData);
    } else {
      setData(filterData);
    }
  }, [select, likes, bookmarks]);

  if (Array.isArray(filterData) && !filterData.length) {
    return (
      <TableContent>
        <CenterText>Any favorites or seen list yet...</CenterText>
      </TableContent>
    );
  }
  return (
    <div>
      <FilterContent>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="filter">Filter by</option>
          <option value="date">Closest Release Date</option>
          <option value="like">Just My Favorites</option>
          <option value="bookmark">Just My Seenlist</option>
        </select>
      </FilterContent>
      <TableContent>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Genres</th>
              <th>L / S</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index) => (
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
                    <Flex flexDirection="row" justify="center" align="center">
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
      </TableContent>
    </div>
  );
}

export default ProfileTable;
