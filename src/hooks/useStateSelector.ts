import type { RootState } from '@amnis/state';
import type { RootStateWeb } from '@amnis/state/web';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export const useStateSelector: TypedUseSelectorHook<RootState & RootStateWeb> = useSelector;

export default useStateSelector;
