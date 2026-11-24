import { useState, useMemo, useCallback } from 'react';
import {
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
} from '../data/mockData';

export function usePortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((category: PortfolioCategory) => {
    setActiveFilter(category);
  }, []);

  const openItemModal = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
  }, []);

  const closeItemModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return {
    activeFilter,
    filteredItems,
    selectedItem,
    handleFilterChange,
    openItemModal,
    closeItemModal,
  };
}
