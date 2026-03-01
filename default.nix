{ stdenv, bun2nix, ... }:
stdenv.mkDerivation {
  pname = "hayshin-website";
  version = "0.1.0";

  src = ./.;

  nativeBuildInputs = [
    bun2nix.hook
  ];

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ./bun.nix;
  };

  buildPhase = ''
    # Generate i18n files first
    bun run locales

    # Build the static site
    bun run build
  '';

  installPhase = ''
    # Copy static files directly to $out (not $out/build)
    mkdir -p $out
    cp -r build/* $out/
  '';
}
