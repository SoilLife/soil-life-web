function handleOnClick(cb: () => void) {
  return () => cb();
}

function handleOnKeydown(cb: () => void) {
  return (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      cb();
    }
  };
}

export function makeSvgInteractive({
  svg,
  onClick,
  onKeydown,
  ariaLabel,
  classList,
}: {
  svg: SVGGElement | null;
  onClick: () => void;
  onKeydown: () => void;
  ariaLabel: string;
  classList?: string[];
}) {
  if (!svg) return;
  svg.classList.add(
    'cursor-pointer',
    'focus:opacity-50',
    'hover:opacity-50',
    'active:opacity-100',
    ...(classList ? classList : [])
  );
  svg.tabIndex = 0;
  svg.ariaLabel = ariaLabel;
  svg.addEventListener('click', handleOnClick(onClick));
  svg.addEventListener('keydown', handleOnKeydown(onKeydown));
  return {
    unmount() {
      svg.removeEventListener('click', handleOnClick(onClick));
      svg.removeEventListener('keydown', handleOnKeydown(onKeydown));
    },
  };
}
