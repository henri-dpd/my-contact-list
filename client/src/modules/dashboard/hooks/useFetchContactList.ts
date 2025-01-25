import { useCallback } from 'react';
import { useDashboardContext } from '../context/useDashboardContext';
import contactService from '../service/contacts.service';
import { ResponseError } from '@/core/types/service';
import useLoading from '@/core/components/Loading/useLoading';
import useHandleErrors from '@/core/hooks/useHandleErrors';

const useFetchContactList = () => {
  const {
    state: { search, page },
    dispatch,
  } = useDashboardContext();
  const { setLoading } = useLoading();
  const handleError = useHandleErrors();

  const fetchContactList = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contactService.getContactList({ search, page });
      dispatch({
        type: 'SET_DATA',
        payload: data,
      });
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  return fetchContactList;
};

export default useFetchContactList;
