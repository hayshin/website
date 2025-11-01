<script lang="ts">
  const birthTime = new Date('2005-07-23T11:00:00');
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const msPerDay = 24 * 60 * 60 * 1000;

  function calculateYears() {
    const now = new Date();
    const diffMs = now.getTime() - birthTime.getTime();
    const years = Math.floor(diffMs / msPerYear);
    const remainingMsAfterYears = diffMs - years * msPerYear;
    const days = Math.floor(remainingMsAfterYears / msPerDay);
    return { years, days };
  }

  function calculateSeconds() {
    const now = new Date();
    const diffMs = now.getTime() - birthTime.getTime();
    const remainingMsAfterDays = diffMs % msPerDay;
    return Math.floor(remainingMsAfterDays / 1000);
  }

  const { years, days } = calculateYears();
  let seconds = $state(calculateSeconds());

  $effect(() => {
    const interval = setInterval(() => {
      seconds = calculateSeconds();
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

{years} years, {days} days, {seconds} secs
