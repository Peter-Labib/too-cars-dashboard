import React from 'react'
import { useTranslation } from 'react-i18next'
import plusBlue from '../../assets/icon/plus-blue.svg'
import closeRed from '../../assets/icon/close-red.svg'
import plusGreen from '../../assets/icon/plus-green.svg'
import location from '../../assets/icon/location-blue.svg'
import IconedBtn from '../../shared/components/IconedBtn'

const EditCaptinRouteBox = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full'>
      <p className='title-added'>{t('Edit captin')}</p>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 shadowed-container-added p-4'>
        <div className='col-span-1'>
          <IconedBtn title={t('Add captin')} icon={plusBlue} />
        </div>
        <div className='col-span-1'>
          <IconedBtn title={t('Add Balance')} icon={plusGreen} />
        </div>
        <div className='col-span-1'>
          <IconedBtn title={t('Deactivate')} icon={closeRed} />
        </div>
        <div className='col-span-1'>
          <IconedBtn title={t('Trips')} icon={location} />
        </div>
      </div>
    </div>
  )
}

export default EditCaptinRouteBox
