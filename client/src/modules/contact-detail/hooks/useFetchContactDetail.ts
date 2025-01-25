import { useCallback } from 'react';
import { ResponseError } from '@/core/types/service';
import useLoading from '@/core/components/Loading/useLoading';
import contactService from '@/modules/dashboard/service/contacts.service';
import { useContactDetailContext } from '../context/useContactDetailContext';
import { useNavigate } from 'react-router-dom';
import useHandleErrors from '@/core/hooks/useHandleErrors';

const useFetchContactDetail = (id?: string) => {
  const { dispatch } = useContactDetailContext();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const handleError = useHandleErrors();

  const fetchContactDetail = useCallback(async () => {
    if (!id) {
      console.log("Id doesn't exists");
      navigate(-1);
      return;
    }
    try {
      setLoading(true);
      const data = await contactService.getContactDetail(id);
      dispatch({
        type: 'SET_DATA',
        payload: data,
      });
      console.log(data);
    } catch (error) {
      handleError(error as ResponseError);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return fetchContactDetail;
};

export default useFetchContactDetail;
