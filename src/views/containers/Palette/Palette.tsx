import { CustomButton } from '../../components/CustomButton/CustomButton';

export const Palette = () => {
  return (
    <>
      <CustomButton text={'Hello Wo'} mode={'danger'} disabled={true} />
      <CustomButton text={'Hello'} mode={'warning'} />
      <CustomButton text={'Hello'} />
      <CustomButton text={'Hello'} mode={'danger'} />
    </>
  );
};

export default Palette;
