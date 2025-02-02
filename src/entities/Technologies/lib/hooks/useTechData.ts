import { technologiesData } from '../../model/mock-data';
import { useMemo } from 'react';

export const useTechData = (type: 'main' | 'remaining') => {
    const techData = useMemo(() => {
        return type === 'main'
            ? technologiesData.slice(0, 2)
            : technologiesData.slice(2);
    }, [type]);
    return techData;
};
