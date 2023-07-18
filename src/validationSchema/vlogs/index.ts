import * as yup from 'yup';

export const vlogValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  background_music: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
