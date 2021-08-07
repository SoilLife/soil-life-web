import React, { useState, useRef } from 'react';

// components
import { Icon } from 'design-system/atoms';
import { Header, MediaHub } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// helpers
import { debounce } from 'lodash';
import { useMediaHub } from 'helpers/use-media-hub';

// assets
import FoodSvg from 'public/images/media-hub/food.svg';
import FiberSvg from 'public/images/media-hub/fiber.svg';
import FilterSvg from 'public/images/media-hub/filter.svg';
import FoundationSvg from 'public/images/media-hub/foundation.svg';
import FarmaceuticalSvg from 'public/images/media-hub/farmaceutical.svg';
import FunSvg from 'public/images/media-hub/fun.svg';
import FoodSvgWhite from 'public/images/web-of-soil/food_white.svg';
import FiberSvgWhite from 'public/images/web-of-soil/fiber_white.svg';
import FilterSvgWhite from 'public/images/web-of-soil/filter_white.svg';
import FoundationSvgWhite from 'public/images/web-of-soil/foundation_white.svg';
import FarmaceuticalSvgWhite from 'public/images/web-of-soil/farmaceutical_white.svg';
import FunSvgWhite from 'public/images/web-of-soil/fun_white.svg';

export default function MediaPage() {
  const { media } = useMediaHub();
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  const debouncedSearch = debounce(handleSearchChange, 250);

  function handleFilterChange(filter: string) {
    return () => {
      const filterSet = new Set(filters);
      const hasFilter = filterSet.has(filter);
      if (hasFilter) {
        filterSet.delete(filter);
      } else {
        filterSet.add(filter);
      }

      const newFilters = Array.from(filterSet);
      setFilters(newFilters);
    };
  }

  function handleClearSearch() {
    setSearch('');
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  return (
    <DefaultLayout>
      <Header.Main fullpageRef={{ current: null }} hideHeader={false} />
      <div className='mt-28 mb-8'>
        <div className='container flex flex-col justify-between gap-4 lg:flex-row'>
          <div className='flex items-center relative h-12 w-full sm:w-[480px] xl:w-[653px]'>
            <input
              ref={inputRef}
              type='text'
              className='border-none ring-1 ring-pink-500 rounded-full w-full placeholder-pink-300 outline-none focus:border-none focus:ring-2 focus:ring-pink-500 text-xl font-acre-light'
              placeholder='search by keyword'
              onChange={debouncedSearch}
            />
            <Icon
              icon={!search ? 'search' : 'x'}
              onClick={search ? handleClearSearch : undefined}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${search ? 'cursor-pointer' : ''}`}
            />
          </div>

          <div className='flex items-center space-x-6 justify-between sm:space-x-10 sm:justify-start'>
            <p className='text-xl font-acre-light text-pink-500'>filters:</p>
            <ul className='flex space-x-6 sm:space-x-8'>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-pink-500 ${
                    filters.includes('food') ? 'bg-pink-500' : ''
                  }`}
                  onClick={handleFilterChange('food')}
                >
                  {filters.includes('food') ? <FoodSvgWhite /> : <FoodSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-yellow-500 ${
                    filters.includes('fiber') ? 'bg-yellow-500' : ''
                  }`}
                  onClick={handleFilterChange('fiber')}
                >
                  {filters.includes('fiber') ? <FiberSvgWhite /> : <FiberSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-blue-500 ${
                    filters.includes('filter') ? 'bg-blue-500' : ''
                  }`}
                  onClick={handleFilterChange('filter')}
                >
                  {filters.includes('filter') ? <FilterSvgWhite /> : <FilterSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-gray-500 ${
                    filters.includes('foundations') ? 'bg-gray-500' : ''
                  }`}
                  onClick={handleFilterChange('foundations')}
                >
                  {filters.includes('foundations') ? <FoundationSvgWhite /> : <FoundationSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-orange-500 ${
                    filters.includes('farmaceuticals') ? 'bg-orange-500' : ''
                  }`}
                  onClick={handleFilterChange('farmaceuticals')}
                >
                  {filters.includes('farmaceuticals') ? <FarmaceuticalSvgWhite /> : <FarmaceuticalSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-teal-500 ${
                    filters.includes('fun') ? 'bg-teal-500' : ''
                  }`}
                  onClick={handleFilterChange('fun')}
                >
                  {filters.includes('fun') ? <FunSvgWhite /> : <FunSvg />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MediaHub media={media} search={search} filters={filters} className='space-y-16 mb-16' />
    </DefaultLayout>
  );
}
