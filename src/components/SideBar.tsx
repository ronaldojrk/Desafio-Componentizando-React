import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import '../styles/sidebar.scss';
import { GenreResponseProps } from '../types';



interface genresProps {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}



export function SideBar(props: genresProps) {

  return (


    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
  // Complete aqui
}