interface VehicleIconNavProps {
  color?: string;
}

export default function VehicleIconNav({ color = "white" }: VehicleIconNavProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.91675 12.75V4.24998C9.91675 3.87426 9.76749 3.51392 9.50182 3.24825C9.23614 2.98257 8.8758 2.83331 8.50008 2.83331H2.83341C2.45769 2.83331 2.09736 2.98257 1.83168 3.24825C1.566 3.51392 1.41675 3.87426 1.41675 4.24998V12.0416C1.41675 12.2295 1.49138 12.4097 1.62421 12.5425C1.75705 12.6754 1.93722 12.75 2.12508 12.75H3.54175"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.625 12.75H6.375" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.4584 12.75H14.8751C15.0629 12.75 15.2431 12.6754 15.3759 12.5426C15.5088 12.4097 15.5834 12.2295 15.5834 12.0417V9.45627C15.5831 9.29552 15.5282 9.13965 15.4276 9.01427L12.9626 5.93302C12.8963 5.85006 12.8123 5.78305 12.7167 5.73695C12.621 5.69085 12.5162 5.66684 12.4101 5.66669H9.91675"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0417 14.1666C12.8241 14.1666 13.4583 13.5324 13.4583 12.75C13.4583 11.9676 12.8241 11.3333 12.0417 11.3333C11.2593 11.3333 10.625 11.9676 10.625 12.75C10.625 13.5324 11.2593 14.1666 12.0417 14.1666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95841 14.1666C5.74082 14.1666 6.37508 13.5324 6.37508 12.75C6.37508 11.9676 5.74082 11.3333 4.95841 11.3333C4.17601 11.3333 3.54175 11.9676 3.54175 12.75C3.54175 13.5324 4.17601 14.1666 4.95841 14.1666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
