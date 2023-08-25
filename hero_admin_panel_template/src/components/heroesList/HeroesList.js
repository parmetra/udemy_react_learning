import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from "framer-motion";

import { useGetHeroesQuery, useDeleteHeroMutation } from '../../api/apiSlice';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const {
        data: heroes = [],
        isFetching,
        isLoading,
        isError,
        error
    } = useGetHeroesQuery();

    const [deleteHero] = useDeleteHeroMutation();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();
        if (activeFilter === 'all') {
            return filteredHeroes;
        }
        else return filteredHeroes.filter(item => item.element === activeFilter)
    }, [heroes, activeFilter]);

    const onDelete = useCallback((id) => {
        deleteHero(id)
    }, []);

    if (isLoading || isFetching) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">{`Ошибка загрузки: ${error}`}</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => 
            (
                <HeroesListItem key={id} onDelete={() => onDelete(id)} {...props}/>
            )
        )
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <AnimatePresence mode='wait'>
            <ul>
                {elements}
            </ul>
        </AnimatePresence>
    )
}

export default HeroesList;