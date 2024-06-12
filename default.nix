# default.nix

{ pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation rec {
    name = "react-demo";
    buildInputs = [
        pkgs.nodejs
        pkgs.corepack
    ];

    shellHook = ''
        export NODE_ENV=development
    '';
}