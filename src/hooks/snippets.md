const ref = React.useRef<HTMLDivElement | null>(null);
const entry = useIntersectionObserver(ref, {
threshold: 0.5,
});
const isVisible = !!entry?.isIntersecting;
