import { Modal } from 'antd';
import { useI18nTranslation } from '../i18n/I18n';
import useGeneralStore from '../store/GeneralStore';
import ButtonCustom from './ButtonCustom';

export default function ModalCustom() {
  const { t } = useI18nTranslation();
  const modal = useGeneralStore((state) => state.modal);
  const setModal = useGeneralStore((state) => state.setModal);
  const onCancel = () => {
    setModal(null);
  };

  const ModalFooter = () => {
    return (
      <div className="flex justify-end">
        <ButtonCustom
          tipo="primary"
          onClick={onCancel}
          styles={modal?.tipo == 'error' ? 'bg-error' : ''}
        >
          {t('general.close')}
        </ButtonCustom>
      </div>
    );
  };
  return (
    <Modal
      title={
        <h1
          className={
            'text-2xl text-center ' + (modal?.tipo == 'error' ? 'text-error' : 'text-primary')
          }
        >
          {modal?.title ? modal.title : t('general.error')}
        </h1>
      }
      open={modal != null}
      footer={ModalFooter}
      closeIcon={null}
      onCancel={onCancel}
    >
      <div className="flex flex-col items-center w-full">
        <p className="text-lg">{modal?.message}</p>
      </div>
    </Modal>
  );
}
