import ButtonCustom from '../components/ButtonCustom';

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      Home
      <ButtonCustom onClick={() => document.body.classList.toggle('dark')} tipo="secondary">
        TOGGLE
      </ButtonCustom>
      <ButtonCustom onClick={() => document.body.classList.toggle('dark')}>TOGGLE</ButtonCustom>
      <ButtonCustom onClick={() => document.body.classList.toggle('dark')}>TOGGLE</ButtonCustom>
      <ButtonCustom onClick={() => document.body.classList.toggle('dark')}>TOGGLE</ButtonCustom>
    </div>
  );
}
