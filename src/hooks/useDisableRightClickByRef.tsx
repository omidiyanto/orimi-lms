import { useEffect } from 'react';

// Menentukan tipe parameter untuk ref
const useDisableRightClickByRef = (ref: React.RefObject<HTMLElement>): void => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Mencegah menu klik kanan muncul
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('contextmenu', handleContextMenu);

      // Clean up event listener saat komponen di-unmount
      return () => {
        element.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, [ref]);
};

export default useDisableRightClickByRef;
