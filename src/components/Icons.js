export const CartIcon = ({width}) => (
    <svg width={width} viewBox="-35 0 512 512.001" xmlns="http://www.w3.org/2000/svg">
        <path d="M443.055 495.172L404.14 124.598c-.817-7.758-7.356-13.649-15.157-13.649h-73.14V94.273C315.844 42.293 273.55 0 221.57 0c-51.984 0-94.277 42.293-94.277 94.273v16.676h-73.14c-7.801 0-14.34 5.89-15.157 13.649L.082 495.172a15.263 15.263 0 003.832 11.789A15.25 15.25 0 0015.238 512h412.657c4.32 0 8.437-1.832 11.324-5.04a15.236 15.236 0 003.836-11.788zM157.77 94.273c0-35.175 28.62-63.796 63.8-63.796 35.176 0 63.797 28.62 63.797 63.796v16.676H157.77zM32.16 481.523l35.715-340.097h59.418v33.582c0 8.414 6.824 15.238 15.238 15.238s15.239-6.824 15.239-15.238v-33.582h127.597v33.582c0 8.414 6.824 15.238 15.238 15.238 8.415 0 15.239-6.824 15.239-15.238v-33.582h59.418l35.715 340.097zm0 0"/>
    </svg>
);

export const DeleteIcon = ({width, onClick}) => (
    <svg width={width} onClick={onClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88">
        <path d="M.324 1.909a1.14 1.14 0 010-1.587 1.14 1.14 0 011.587 0l9.523 9.539L20.973.322a1.12 1.12 0 011.571 0 1.112 1.112 0 010 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 010 1.587 1.12 1.12 0 01-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 01-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z" fill="#1e201d"/>
    </svg>
)

export const AddIcon = ({width, onClick}) => (
    <svg width={width} onClick={onClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
        <path d="M392.533 187.733H221.867V17.067C221.867 7.641 214.226 0 204.8 0s-17.067 7.641-17.067 17.067v170.667H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h170.667v170.667c0 9.426 7.641 17.067 17.067 17.067s17.067-7.641 17.067-17.067V221.867h170.667c9.426 0 17.067-7.641 17.067-17.067s-7.643-17.067-17.069-17.067z"/>
    </svg>
)

export const RemoveIcon = ({width, onClick}) => (
    <svg width={width} onClick={onClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
        <path d="M392.533 187.733H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.068-17.067z"/>
    </svg>
)

export const EmptyCart = () => (
    <svg viewBox="0 0 512.004 512.004" xmlns="http://www.w3.org/2000/svg">
        <path d="M373.733 345.447c20.552-10.409 35.373-30.664 38.023-55.016l20.737-190.504c3.871-29.011 21.521-59.924 59.511-59.924 11.046 0 20-8.954 20-20s-8.954-20-20-20c-26.871 0-50.587 9.735-68.584 28.153-16.514 16.899-27.1 39.991-30.615 66.778-.019.146-.037.292-.053.438l-1.484 13.632h-253.98L34.146 5.86c-7.811-7.811-20.474-7.811-28.284 0s-7.811 20.474 0 28.284l472 472c3.905 3.905 9.023 5.857 14.142 5.857s10.237-1.952 14.142-5.857c7.811-7.811 7.811-20.475 0-28.285zm13.181-196.445l-14.923 137.101a30.12 30.12 0 01-29.987 26.899c-.23 0-.453.027-.681.034L177.288 149.002zM32.877 281.954L.425 133.085c-2.255-10.813 4.682-21.407 15.495-23.662 10.809-2.258 21.406 4.681 23.662 15.495l32.305 148.196c2.923 12.899 10.194 23.932 20.474 31.063 8.322 5.773 17.766 8.825 27.312 8.825h104.331c11.046 0 20 8.954 20 20s-8.954 20-20 20H119.673c-17.735 0-35.063-5.519-50.113-15.96-18.516-12.846-31.544-32.409-36.683-55.088zm320.681 160.584c-10.749-2.546-21.523 4.116-24.062 14.866-2.03 8.595-9.634 14.598-18.492 14.598-10.477 0-19-8.523-19-19s8.523-19 19-19c11.046 0 20-8.954 20-20s-8.954-20-20-20h-198c-32.533 0-59 26.468-59 59s26.467 59 59 59 59-26.468 59-59a58.718 58.718 0 00-3.157-19h86.295a58.762 58.762 0 00-3.138 19c0 32.532 26.467 59 59 59 27.494 0 51.106-18.67 57.421-45.402 2.539-10.75-4.117-21.523-14.867-24.062zm-221.554 10.464c0 10.477-8.523 19-19 19s-19-8.523-19-19 8.523-19 19-19 19 8.523 19 19z"/>
    </svg>
)