# default.nix

{ pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation rec {
    name = "resume-site";
    buildInputs = [
        pkgs.nodejs
        pkgs.corepack
    ];

    shellHook = ''
        export NODE_ENV=development
    '';
}