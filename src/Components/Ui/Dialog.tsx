import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'




interface IModel {
  isOpen:boolean
  closeModel:()=>void
  title:string
  children:ReactNode

 
}
function Model({isOpen,closeModel,title,children}:IModel) {

  return (
    <>
    
      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => closeModel()} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-lg space-y-4 bg-white p-12 rounded-lg"
              >
                <DialogTitle className="text-3xl">{title}</DialogTitle>
                <Description>This will permanently deactivate your account</Description>
                <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                <div className="flex gap-4">
                  {children}
                
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
export default Model