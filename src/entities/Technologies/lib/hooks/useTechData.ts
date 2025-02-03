import { technologiesData } from '../../model/mock-data';
import { useMemo } from 'react';

export const useTechData = (type: 'main' | 'remaining' | 'all') => {
    const techData = useMemo(() => {
        return type === 'main'
            ? technologiesData.slice(0, 2)
            : type === 'remaining'
            ? technologiesData.slice(2)
            : technologiesData;
    }, [type]);
    return techData;
};
